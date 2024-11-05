
function MapList({arrayItem=[], renderer}){
    return (
        <>
        {arrayItem.map((item, key)=>renderer(item, key))}
        </>
    )
}

export {MapList}