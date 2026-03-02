import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert.js'

export const sightingEvents = new EventEmitter()

emitter.on("sighting-added", createAlert)
