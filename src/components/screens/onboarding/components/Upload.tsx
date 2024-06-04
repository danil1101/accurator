import { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { Button, Typography } from '@/components/ui'

interface IProps {
	setFile: (file: any) => void
	variant: number
}

const Upload: FC<IProps> = ({ setFile, variant }) => {
	const [step, setStep] = useState(0)
	const fileInputRef = useRef<any>()
	const navigate = useNavigate()

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
		return () => {
			setStep(0)
		}
	}, [])

	return (
		<div className='gap-base-x5 flex flex-col relative h-[282px]'>
			<div>
				<CSSTransition
					in={step === 1}
					timeout={700}
					unmountOnExit
					classNames='fade'
				>
					<Typography variant='h1'>
						{variant === 1 ? 'Ха' : 'Давай докажем'}
					</Typography>
				</CSSTransition>
				<CSSTransition
					in={step >= 2}
					timeout={700}
					unmountOnExit
					classNames='fade'
				>
					<Typography variant='h1'>Загрузи своё селфи</Typography>
				</CSSTransition>
				<CSSTransition
					in={step >= 3}
					timeout={1000}
					unmountOnExit
					classNames='slide'
				>
					<Typography variant='h1'>и дай нам всего 10 секунд</Typography>
				</CSSTransition>
			</div>

			<CSSTransition
				in={step >= 4}
				timeout={1000}
				unmountOnExit
				classNames='slide'
			>
				<div className='flex flex-col gap-base-x3'>
					<div>
						{/*<Button onClick={() => fileInputRef.current.click()}>
							Загрузить
						</Button>*/}
						<Button onClick={() => navigate('/home')}>Загрузить</Button>
						<input
							multiple={false}
							ref={fileInputRef}
							onChange={setFile}
							accept='image/*'
							type='file'
							hidden
						/>
					</div>

					<Typography variant='smalltext' className='text-center'>
						Мы сохраняем <span className='underline'>конфиденциальность</span>
					</Typography>
				</div>
			</CSSTransition>
		</div>
	)
}

export default Upload
