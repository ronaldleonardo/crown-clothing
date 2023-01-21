import './form-input.styles.scss'
const FormInput = ({ label, ...otherProps }) =>{
	return (
		<div className='group'>
		{/*if label exist then render <label>*/}
			<input className='form-input'
				{...otherProps}
			/>
			{label && (
					<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{
						label}
					</label>
			)} 

		</div>
	)
}

export default FormInput;
