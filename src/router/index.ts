import { createRouter, createWebHistory } from "vue-router"
import home from "@/views/home/index.vue"
interface IComponent {
  name: string
  path: string
}
interface IComponentParent extends IComponent {
  children: IComponent[]
}
export const componentList: Array<IComponentParent> = [
  {
    name: "Basic 基础组件",
    path: "base",
    children: [
      {
        name: "Button",
        path: "button",
      },
      {
        name: "Border",
        path: "border",
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: componentList[0].children[0].path,
      children: componentList.map((group, groupIndex) => ({
        path: `/${group.path}`,
        name: group.name,
        children: group.children.map((component, componentIndex) => ({
          path: `/${component.path}`,
          name: component.name,
          component: () => import(`@/components/${component.path}/index.vue`),
        })),
      })),
      // children: [
      //   {
      //     path: "/button",
      //     name: "button",
      //     component: () => import("@/components/button/index.vue"),
      //   },
      // ],
    },
  ],
})

export default router
