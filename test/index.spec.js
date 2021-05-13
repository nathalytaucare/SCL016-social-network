/* eslint-disable import/first */
/* eslint-disable no-undef */
// import MockFirebase from '../_mocks_/firebase-mock.js'
// global.firebase = MockFirebase()
import MockFirebase from 'mock-cloud-firestore'

const fixtureData = {
  __collection__: {
    pots: {
      __doc__: {
        abc123: {
          title: 'terminar la pildora'
        },
        abc125: {
          title: 'comprar trufas'
        }
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true })

import { savePost } from '../src/lib/index'

describe('save', () => {
  it('Deberia poder agregar un post', () => {
    return savePost('hola').then((data) => {
      console.log(data)
      expect(data.postIt).toBe('hola')
    })
  })
})
