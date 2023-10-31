import * as React from "react";
import Pagination from "./pagination";
import PagePosts from "./pagePosts";
import { IMetMuseum } from "../models/models";
import { getData } from '../services/getData';
import { useContext } from 'react';
import { LoadingContext, TypeLoadingProvider } from '../context/LoadingProvider';

interface ICardsProps {
  objectIds: number[];
}


// 2. TODO fetch each artwork data from the API
//    NOTE: 'list' argument is src/mocks.ts LIST.objectIDs
const Cards: React.FunctionComponent<ICardsProps> = ({ objectIds }) => {
  const [cardResults, setCardResults] = React.useState<IMetMuseum[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(6);
  const { loading, setLoading } = useContext(LoadingContext) as TypeLoadingProvider;


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = cardResults.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    React.useEffect(() => {
      let newFetch = false;

      if (!newFetch && (objectIds && objectIds.length > 0)) {
          getData(objectIds, setCardResults);
      }

      return () => {
          newFetch = true;
      };
  }, [objectIds]);

  if (objectIds) {
    return (
        <>
            <PagePosts items={currentPosts}/>
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={cardResults.length}
                paginate={paginate}
            />
        </>
    );
  } else {
    return <div>No resutls found.</div>;
  }
};

export default Cards;
