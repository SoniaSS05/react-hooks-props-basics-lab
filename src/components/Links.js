

function Links(props){
    const linkgit =props.github;
    const linklink =props.linkedin;
    console.log(linkgit);
    return(
    <div>
        <h3>Links</h3>
        <a href={linkgit}>{linkgit}</a>
        <a href={linklink}>{linklink}</a>
    </div>
    )
}

export default Links;