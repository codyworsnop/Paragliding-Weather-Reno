import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router'
import DynamicContentContainer from '../../DynamicContent/_components/DynamicContentContainer'

const DynamicRoutes = () => {
    const { pages, loading } = useSelector(({ contentReducer }) => ({
        pages: contentReducer.pages,
        loading: contentReducer.loading,
    }))

    return (
        <>
            {pages?.map(page =>
                <Route exact path={`/${page.pathname}`} >
                    <DynamicContentContainer content={page.content} />
                </Route>
            )}
        </>
    )
}

export default DynamicRoutes