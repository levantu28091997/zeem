import React, { ReactElement } from 'react'
import DescriptionComponent from '../components/description'
import GridComponent from '../components/grid'
import LayoutHome from '../components/layoutHome'
import MainCenterComponent from '../components/mainCenter'
import { NextPageWithLayout } from './_app'

const HomeView:NextPageWithLayout = () => {
    return <h1>HomeView</h1>
}

HomeView.getLayout = (page: ReactElement) => {
    return <LayoutHome title="HomeView" >
        <DescriptionComponent fileName="home" />
        <MainCenterComponent>
            {page}
        </MainCenterComponent>
        <GridComponent/>
    </LayoutHome>
}

export default HomeView
