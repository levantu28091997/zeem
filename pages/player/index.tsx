import { ReactElement } from 'react'
import Layout from '../../components/layout'
import { NextPageWithLayout } from '../_app'
import MainCenterComponent from '../../components/mainCenter'


const Player: NextPageWithLayout = () => {
    return <div>player page</div>
}

Player.getLayout = (page: ReactElement) => (
    <Layout pageName='Player' description='simi - music for everyone'>
        <MainCenterComponent>
            {page}
        </MainCenterComponent>
    </Layout>
)

export default Player
