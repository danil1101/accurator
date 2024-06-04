import { FC, useState } from 'react'

import { Info, Upload } from './components'

const Onboarding: FC = () => {
	const [variant, setVariant] = useState(0)
	const [file, setFile] = useState()

	console.log(file)
	return (
		<div className='px-base-x5 py-base-x3 h-full flex flex-col justify-end'>
			{variant === 0 ? (
				<Info setVariant={setVariant} />
			) : (
				<Upload setFile={setFile} variant={variant} />
			)}
		</div>
	)
}

export default Onboarding
