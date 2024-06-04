import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

import * as config from './typography.config'
import { ITypography } from './typography.interface'

const Typography: FC<PropsWithChildren<ITypography>> = ({
	color,
	variant,
	className,
	children,
	...props
}) => {
	const classes = cn(className, {
		['text-text-' + color]: color,
		[config.variant[variant]]: variant
	})

	return (
		<p className={classes} {...props}>
			{children}
		</p>
	)
}

export default Typography
