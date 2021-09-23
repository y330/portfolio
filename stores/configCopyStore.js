import { writable } from 'svelte/store'
import * as configCopy from '../data/copy.json'

export const configStore = writable(configCopy)
