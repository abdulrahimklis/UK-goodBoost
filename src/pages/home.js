import React from 'react';
import { Layout } from '../style'
import { hardcodedData } from '../service/API';
import Box from '../components/box';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: hardcodedData
        }
    }

    render() {
        return(
            <>
                <Layout display={'flex'} justifyContent={'center'} flexDirectionColumn={'960'}  width={'80vw'} margin={'0 auto'} id='homeWrapper'>
                    <Box data={this.state.data} />
                </Layout>
            </>
        );
    }
}

export default Home;
