import React from "react";

const ReasultList = (props) => {
    const listItems = props.value.map((item) => {
        const date = new Date(item.attributes.event_date);
        return <a key={item.attributes.OBJECTID} href="#" className={'list-group-item list-group-item-action ' + item.attributes.event_type} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.attributes.event_type}</h5>
                <small>{date.toLocaleDateString("de-DE")}</small>
            </div>
            <p className="mb-1">{item.attributes.notes}</p>
            <small>{item.attributes.actor1}</small>
        </a>
    });

    React.useEffect(() => {
        console.log(props)
    }, []);

    return <div className="list list-group flex-grow-1">
        {listItems}
    </div>;
}

export default ReasultList