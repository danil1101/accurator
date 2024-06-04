import { FC, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Button, Typography } from '@/components/ui'

interface IProps {
	setVariant: (variant: number) => void
}

const Info: FC<IProps> = ({ setVariant }) => {
	const [step, setStep] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setStep(1)
		}, 1000)

		setTimeout(() => {
			setStep(0)
		}, 2000)

		setTimeout(() => {
			setStep(2)
		}, 3000)

		setTimeout(() => {
			setStep(3)
		}, 4000)

		setTimeout(() => {
			setStep(4)
		}, 5000)

		setTimeout(() => {
			setStep(5)
		}, 6000)
		return () => {
			setStep(0)
		}
	}, [])

	return (
		<div className='gap-base-x5 flex flex-col relative h-[300px]'>
			<div>
				<CSSTransition
					in={step === 1}
					timeout={700}
					unmountOnExit
					classNames='fade'
				>
					<Typography variant='h1'>Здравствуй</Typography>
				</CSSTransition>
				<CSSTransition
					in={step >= 2}
					timeout={700}
					unmountOnExit
					classNames='fade'
				>
					<Typography variant='h1'>спорим</Typography>
				</CSSTransition>
				<CSSTransition
					in={step >= 3}
					timeout={1000}
					unmountOnExit
					classNames='slide'
				>
					<Typography variant='h1'>ты знаешь о себе не так много</Typography>
				</CSSTransition>
				<CSSTransition
					in={step >= 4}
					timeout={1000}
					unmountOnExit
					classNames='slide'
				>
					<Typography variant='h1'>как думаешь</Typography>
				</CSSTransition>
			</div>

			<CSSTransition
				in={step >= 5}
				timeout={1000}
				unmountOnExit
				classNames='slide'
			>
				<div className='flex gap-base-x5'>
					<Button onClick={() => setVariant(1)}>Пфффф</Button>
					<Button onClick={() => setVariant(2)}>Возможно</Button>
				</div>
			</CSSTransition>
		</div>
	)
}

export default Info
