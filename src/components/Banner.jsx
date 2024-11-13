
const Banner = () => {
    return (
        <section className="app__banner" role="banner">
            <div className="banner__content">
                <h1 tabIndex={0}><span role="heading" aria-label="Men’s Outerwear">Men’s Outerwear</span></h1>
                <div className='banner__img' role="banner" aria-label="Mens outer wear image" tabIndex={"0"} />
            </div>
        </section>
    )
}

export default Banner;