import { encode } from 'gpt-3-encoder'
import { model } from './openAI'

export const countTokens = async(messages: [{ role, content }]) => {
  // this package is only suitable for gpt3
  if (!model.startsWith('gpt-3'))
    return -1

  let tokenCount = 0
  for (const msg of messages) {
    const msgContent = msg.content
    const contentTokens = encode(msgContent)
    tokenCount = tokenCount + contentTokens.length
  }
  const date = new Date()
  // eslint-disable-next-line no-console
  console.log(`[${date.toISOString()}] msg round: ${messages.length}, token: ${tokenCount}`)
  return tokenCount
}
