import './NameTag.css'

function getRandomColor(){
    return '#' + (Math.random() * 0xFFF << 0).toString(16);
}

function checkColor(i){
    if (i == null) return getRandomColor();
    else return i;
}

export default function NameTag(props) {
    return (
        <div className="TagBG" style={{backgroundColor: checkColor(props.bgcolor)}}>
            <div className="TagFont">
                {props.children}
            </div>
        </div>
    );
}