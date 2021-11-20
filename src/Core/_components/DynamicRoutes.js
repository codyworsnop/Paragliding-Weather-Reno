import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import DynamicContentContainer from '../../DynamicContent/_components/DynamicContentContainer'

const DynamicRoutes = () => {
    const { pages, loading } = useSelector(({ contentReducer }) => ({
        pages: contentReducer.pages,
        loading: contentReducer.loading,
    }))

    return (
        <>
            {pages?.map(page => page.enabled ? 
                <Route exact path={`/${page.pathname}`} >
                    <DynamicContentContainer content={page.content} />
                </Route> : <Redirect to="/" />
            )}
        </>
    )
}

export default DynamicRoutes