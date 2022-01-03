import React from "react";
import ShopData from '../shop/shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collocations:ShopData
        }
    }
    render(){
        const {collocations}=this.state;
        return(
        <div className="shoppage">
            {
            collocations.map(({id,...other}) =>(
                <PreviewCollection key={id} {...other}/>
            )
            )
            }
        </div>
        );
    }
}

export default ShopPage;