'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
    {/* 
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>
      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      */}

      <nav className='bg-black shadow'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold'> My Token Faucet</h1>
            </div>

            <div className='flex items-center'>
              <button>
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <section className='flex justify-center items-center min-h-screen'>
          <div className='bg-white p-6 rounded shadow-md w-96'>
            <input 
              type='text'
              className='block w-full p-4 rounded border border-gray-400 mb-4 text-sm'
              placeholder='Enter your wallet address'
            />
        
            <button className='bg-blue-500 text-white font-bold p-4 rounded text-sm '>
              Request your Tokens
            </button>
          </div>
      </section>

    </>
  )
}

export default App
