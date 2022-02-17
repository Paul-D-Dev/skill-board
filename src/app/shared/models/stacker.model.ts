import { IStacker } from '../interfaces/stacker.interface'

export class Stacker implements IStacker {
  lastname!: string
  firstname!: string
  job!: string
  skills!: string[]
  photoUrl!: string
  location!: string
  resume!: string

  constructor(inputs: IStacker) {
    try {
      Object.assign(this, inputs)
      this.skills = inputs.skills.map((skill) => skill.trim())
    } catch (e) {
      console.warn(`Error on ${this.constructor.name}'s constructor : `, e)
    }
  }
}
