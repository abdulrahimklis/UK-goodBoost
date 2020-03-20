import React from 'react';
import {CustomSpan, Layout, CustomButton} from '../style'

class Box extends React.Component {
    render() {
        return(
            <>
                {this.props && this.props.data.map((item, i) =>{
                    return(
                        <Layout justifyContent={'center'} alignItems={'center'} display={'flex'} key={i} flexDirection={'column'} margin={'15px'}>
                            <img src={item.img} alt={item.name}/>
                            <CustomSpan textAlign={'center'} fontSize={'20px'} margin={'30px 30px'}>{item.desc}</CustomSpan>
                            <a className='linkToPage' href='https://goodboost.org/good-boost-sessions'><CustomButton borderRadius={'5px'} background={'#ff7b00'} padding={'10px 20px'} margin={'25px 0 0 0'}>{item.button}</CustomButton></a>
                        </Layout>
                    );
                }
            )}
            </>
        );
    }
}

export default Box;
