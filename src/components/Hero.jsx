import React,{useState} from 'react';
import { TagsInput } from "react-tag-input-component";
import '../styles/hero.css';
import food from '../illus1.png';

const Hero = () => {
	const [selected, setSelected] = useState(["Biriyani"]);
	const [file, setFile] = useState();

	const handleChange = (e) => {
		setFile(URL.createObjectURL(e.target.files[0])	);
	};
	const onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append(
				"myFile",
				this.state.selectedFile,
				this.state.selectedFile.name
		);

		// Details of the uploaded file
		console.log(this.state.selectedFile);

		// Request made to the backend api
		// Send formData object

};





return (
	<div className="hero flex">
		{/* <h2>Hero Section </h2>	 */}
		<div className="herocontainer">
			<div className="left-section">
					<div className='Brand'>
						<span className='tastypal' >TastyPal </span>
						<img className='food' src={food} alt="" />
					</div>
					<div className="description">
					Welcome to DishDelight, your ultimate culinary partner! 
					Are you tired of the same old meal choices and want to 
					discover exciting new dishes that cater to your unique tastes? 
					Look no further! TastyPal is here to revolutionize your 
					dining experience.
					</div>


			</div>
			<div className="right-section">
				<div className='card'>
				<h1>Add Your Preferences</h1>

				<pre>{JSON.stringify(selected)}</pre>

				<TagsInput
					classNames='tags'
					value={selected}
					onChange={setSelected}
					name="items"
					placeHolder="Favorite foods"
				/>
				<em>press enter to add new tag</em>
  		</div>

			</div>
		</div>
		<div className="Menu">
			<div>
				<h1>Upload the Menu!!</h1>
			</div>
			<div className="menucont">
				<div>
					<span>Select image : </span>
					<input className='menuinp' type="file" onChange={handleChange} />
				</div>
				<div className='preview'>
					<img className='menuimage' src={file} alt="" />
					<button onClick={onFileUpload}>
						Upload!
					</button>
				</div>

			</div>
		</div>
  </div>
);
}

export default Hero;