import './NameTag.css'

export default function NameTag(props) {
    return (
        <div className="TagBG" style={{backgroundColor: props.bgcolor}}>
            <div className="TagFont">
                {props.children}
            </div>
        </div>
    );
}