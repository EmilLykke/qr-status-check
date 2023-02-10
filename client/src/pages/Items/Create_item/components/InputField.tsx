type Props = {
    id: string,
    value: any,
    onChange: (e:any) => void,
}




function InputField({ id, value, onChange }: Props){

var input;
var label;

if(id === "lastStatus"){
  input =<input required id="lastStatus" onChange={onChange}
  type="date" name="text" autoComplete="off" className="input1" />;
  label =<label className="user-label1">{id}</label>;
} else{
  input = <input required id={id} value={value} onChange={onChange}
  type="text" name="text" autoComplete="off" className="input" />;
  label =<label className="user-label">{id}</label>;
}

  return (
    <>
    <div className="input-group">
      {input}
      {label}
    </div>
    
    </>
  )
}

export default InputField;