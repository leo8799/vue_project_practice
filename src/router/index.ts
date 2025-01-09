import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/view/comp_communicate/01_props/Father.vue'
import Event from "@/view/comp_communicate/02_custom-event/Father.vue";
import Bus from '@/view/comp_communicate/03_mitt/Father.vue'
import Model from '@/view/comp_communicate/04_v-model/Father.vue'
import AttrsListeners from '@/view/comp_communicate/05_$attrs/Father.vue'
import RefChildrenParent from '@/view/comp_communicate/06_$refs-$parent/Father.vue'
import ProvideInject from '@/view/comp_communicate/07_provide-inject/Father.vue'
import Pinia from '@/view/comp_communicate/08_pinia/Father.vue'
import Slot from '@/view/comp_communicate/09_slot/Father.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/props',
			component: Props
		},
		{
			path: '/event',
			component: Event
		},
		{
			path: '/mitt',
			component: Bus
		},
		{
			path: '/model',
			component: Model
		},
		{
			path: '/attrs',
			component: AttrsListeners
		},
		{
			path: '/ref-parent',
			component: RefChildrenParent
		},
		{
			path: '/provide-inject',
			component: ProvideInject
		},
		{
			path: '/pinia',
			component: Pinia
		},
		{
			path: '/slot',
			component: Slot
		},
	]
})
