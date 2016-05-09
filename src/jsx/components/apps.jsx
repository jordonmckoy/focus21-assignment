import React, { PropTypes } from 'react';
import { render } from 'react-dom';

class Apps extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="row app__grid_row">
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/group-2.svg" 
							/>
					</div>
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/phc.svg" 
							/>
					</div>
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/immu.svg" 
							/>
					</div>
				</div>
				<div className="row app__grid_row">
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/phc.svg" 
							/>
					</div>
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/group-2.svg" 
							/>
					</div>
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/immu.svg" 
							/>
					</div>
				</div>
				<div className="row app__grid_row">
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/immu.svg" 
							/>
					</div>
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/phc.svg" 
							/>
					</div>
					<div className="col-md-4 app__grid_row__block">
						<span className="app__grid_row__block__helper"></span>
						<img className="app__grid_row__block__img" 
							src="./../../../images/apps/group-2.svg" 
							/>
					</div>
				</div>
			</div>
		);
	}
}

export default Apps;