import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './preview-collection.styles.scss';

const PreviewCollection=(props)=>(
    <div className="collection-preview">
        <h1 className="title">{props.title}</h1>
        <div className="preview"> 
{
    props.items.filter((item,idx)=>(idx < 4)).map(
        ({id,...other})=>
                        (
                            <CollectionItem key={id} {...other}/>
                        )
    )
}
        </div>
    </div>
);

export default PreviewCollection;