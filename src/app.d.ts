// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { PrismaClient } from "@prisma/client"
declare global {
	namespace App {
		interface Error {}
		interface Locals {
			session : {
				id : string,
				userID : number
			}, 
			user : {} | null
		}
		interface PageData {}
		interface Platform {}
	}
	/** @type {PrismaClient} */
	var prisma
}

