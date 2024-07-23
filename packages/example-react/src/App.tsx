import { useSharedState } from 'state-in-url'

function App() {
  return (
    <div className='p-8'>
      <h1>useSharedState hook for React</h1>
      <div className='grid gap-4 grid-cols-2 w-full'>
        <div className='basis-1/2'>
          <FirstComponent />
        </div>
        <div className='basis-1/2'>
          <SecondComponent />
        </div>
      </div>

    </div>
  )
}

const STATE = { name: '', age: 0, agree: false }

const FirstComponent = () => {
  const { state, setState } = useSharedState(STATE)
  return <div className='shadow-md h-full'>
    <div>
      <Label htmlFor='name'>Name</Label>
      <Input id="name"
      value={state.name} onChange={ev => setState(curr => ({ ...curr, name: ev.target.value }))}></Input>
    </div>
    <div>
      <Label htmlFor='age'>Age</Label>
      <Input id="age"
        value={state.age || ''} type="number" onChange={ev => setState(curr => ({ ...curr, age: +ev.target.value }))}></Input>
    </div>
    <div>
      <Label htmlFor='agree'>Agree</Label>
      <Input id="agree"
        checked={state.agree} type="checkbox"
        onChange={ev => setState(curr => ({ ...curr, agree: ev.target.checked }))}></Input>
    </div>
  </div>
}

const SecondComponent = () => {
  const { state, setState } = useSharedState(STATE)

  return <>
    <pre className='shadow-md h-full' data-testid="parsed">
      {JSON.stringify(state, null, 2)}
    </pre>
    <Input id="name" data-testid="name-input"
      value={state.name} onChange={ev => setState(curr => ({ ...curr, name: ev.target.value }))}></Input>
  </>
}

const Label = (props: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => {
  return <label {...props} className={`mb-2 block select-none hover:cursor-pointer ${props.className}`}>{props.children}</label>
}

const Input = ({ className, value, ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <input
      className={`px-3 py-2 border border-gray-300 rounded-md
         shadow-sm focus:ring-orange-500 focus:border-orange-500 text-black
          ${className}
      ${props.type === 'checkbox' ? 'w-6 h-6 cursor-pointer' : 'w-full'}`}
      value={value ?? ''}
      {...props}
    />
  );
};


export default App
