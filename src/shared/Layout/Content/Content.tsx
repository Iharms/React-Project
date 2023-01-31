import React from 'react';
import styles from './content.css';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Post } from "./CardsList/Card/TextContent/Title/Post";
import { NotFoundPage } from "../../UI/NotFoundPage";
import { CardsList } from "./CardsList";

export function Content() {
  const location = useLocation();

  return (
    <main className={ styles.content }>
      <Routes>
        <Route path={ '/' } element={ <Navigate to={ '/posts' }/> }/>
        <Route path={ '/auth' } element={ <Navigate to={ '/posts' }/> }/>

        <Route path={ '/posts' } element={ <CardsList/> }
               errorElement={ <NotFoundPage description={ '404 list' }/> }
        />
        <Route path={ '/posts/:id' } element={ <Post/> }
               errorElement={ <NotFoundPage description={ 'Not found 404' }/> }
        />

        <Route path={ '/*' } element={ <NotFoundPage description={ `Path ${ location.pathname } does not exist` }/> }/>
      </Routes>
    </main>
  );
}
