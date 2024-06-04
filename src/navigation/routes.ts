import { Home, Onboarding } from '@/components/screens'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{
		path: '/onboarding',
		component: Onboarding
	},
	{
		path: '/home',
		component: Home
	}
]
