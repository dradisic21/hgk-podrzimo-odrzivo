import "./Ballons.scss"

export function Ballons() {
    return(
        <div className="balloons-content">
            <img src="/assets/balloons-component/xs-balloon.svg" alt="xs-balloon" className="xs-balloon" />
            <img src="/assets/balloons-component/sm-balloon.svg" alt="sm-balloon" className="sm-balloon" />
            <img src="/assets/balloons-component/md-balloon.svg" alt="md-balloon.svg" className="md-balloon" />
            <img src="/assets/balloons-component/lg-balloon.svg" alt="lg-balloon.svg" className="lg-balloon" />
            <img src="/assets/balloons-component/xxl-balloon.svg" alt="xxl-balloon.svg" className="xxl-balloon" />
        </div>
    )
}