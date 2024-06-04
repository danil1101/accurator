import { Home, Onboarding } from '@/components/screens'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/onboarding',
		component: Onboarding
	}
]
