import {
  UPDATE_UI,
  OPEN_SIGN_TX,
  CLOSE_SIGN_TX,
  OPEN_P_CREATE,
  CLOSE_P_CREATE,
  OPEN_CREATE_USER,
  CLOSE_CREATE_USER,
  OPEN_ASSET_INFO,
  CLOSE_ASSET_INFO,
  OPEN_SELECT_ACCOUNTS,
  CLOSE_SELECT_ACCOUNTS,
  OPEN_ADD_VALIDATOR_DIALOG,
  CLOSE_ADD_VALIDATOR_DIALOG,
  OPEN_ADD_IDENTIFICATION,
  CLOSE_ADD_IDENTIFICATION
} from './types'

const updateUi = ({ commit }, data) => {
  commit(UPDATE_UI, data)
}

const openSignTx = ({ commit }, { unsignedTx, signer }) => {
  commit(UPDATE_UI, { signTx: { isOpen: true, unsignedTx, signer } })
}

const closeSignTx = ({ commit }, signedTx) => {
  commit(UPDATE_UI, { signTx: { isOpen: false, unsignedTx: null, signer: null, signedTx } })
}

const openPCreate = ({ commit, getters }, { type }) => {
  commit(UPDATE_UI, { pCreate: { isOpen: true, type } })
  console.log(getters.ui)
}

const closePCreate = ({ commit }) => {
  commit(UPDATE_UI, { pCreate: { isOpen: false, type: null } })
}

const openCreateU = ({ commit }) => {
  commit(UPDATE_UI, { uCreate: { isOpen: true } })
}

const closeCreateU = ({ commit }) => {
  commit(UPDATE_UI, { uCreate: { isOpen: false } })
}

const openAssetInfo = ({ commit }, { asset }) => {
  commit(UPDATE_UI, { assetInfo: { isOpen: true, asset } })
}

const closeAssetInfo = ({ commit }) => {
  commit(UPDATE_UI, { assetInfo: { isOpen: false, asset: {} } })
}

const openSelectAccounts = ({ commit }, { accounts }) => {
  commit(UPDATE_UI, { selectAccounts: { isOpen: true, accounts } })
}

const closeSelectAccounts = ({ commit }) => {
  commit(UPDATE_UI, { selectAccounts: { isOpen: false, accounts: null } })
}

const openAddIdentification = ({ commit }) => {
  commit(UPDATE_UI, { addIdentification: { isOpen: true, isAuth: false } })
}

const closeAddIdentification = ({ commit }) => {
  commit(UPDATE_UI, { addIdentification: { isOpen: false, isAuth: false } })
}

const openAddValidatorDialog = ({ commit }) => {
  commit(UPDATE_UI, { addValidatorDialog: { isOpen: true, destinationAccount: { address: null }, payingAccount: { address: null } } })
}

const closeAddValidatorDialog = ({ commit }) => {
  commit(UPDATE_UI, { addValidatorDialog: { isOpen: false, destinationAccount: { address: null }, payingAccount: { address: null } } })
}

export default {
  [UPDATE_UI]: updateUi,
  [OPEN_SIGN_TX]: openSignTx,
  [CLOSE_SIGN_TX]: closeSignTx,
  [OPEN_P_CREATE]: openPCreate,
  [CLOSE_P_CREATE]: closePCreate,
  [OPEN_CREATE_USER]: openCreateU,
  [CLOSE_CREATE_USER]: closeCreateU,
  [OPEN_ASSET_INFO]: openAssetInfo,
  [CLOSE_ASSET_INFO]: closeAssetInfo,
  [OPEN_SELECT_ACCOUNTS]: openSelectAccounts,
  [CLOSE_SELECT_ACCOUNTS]: closeSelectAccounts,
  [OPEN_ADD_IDENTIFICATION]: openAddIdentification,
  [CLOSE_ADD_IDENTIFICATION]: closeAddIdentification,
  [OPEN_ADD_VALIDATOR_DIALOG]: openAddValidatorDialog,
  [CLOSE_ADD_VALIDATOR_DIALOG]: closeAddValidatorDialog
}
