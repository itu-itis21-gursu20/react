import { useState } from 'react'

function Form( { todos, setTodos, todo} ) {
    // 

    const [form, setForm] = useState('')

    const onChangeForm = (e) => { // input kısmı değiştiğinde yani değer girildiğinde
        setForm(e.target.value) // bu değeri forma ekler
    }

    const onSubmitTodo = (e) => { // değerleri submit edeceği zaman
        e.preventDefault(); // sayfa yenilenmesini önler
        if(form === ""){ // görev girilmemişse
            alert("Görev kısmı boş, bir görev ekleyin")
            return false;
        }

        setTodos([...todos, {text:form, completed:false, id:Math.random()*1000} ]) // setTodos() içinde [] olmalııdır çünkü todos bir arraydir, var olan todos arrayini alır, yeni girilen todonun texti girilen yazı, completed durumu henüz false olur
        setForm("") // input kısmı sıfırlanır ve yeni inputları bekler
    }


  return (
    <div>
        <header className='header'> 
        <h1>Todos</h1>

        <form>
            <input className='new-todo' value={form} placeholder="What needs to be done?" onChange={onChangeForm}/>
            <button onClick={onSubmitTodo}></button>
        </form>

        </header>

    </div>
  )

}

export default Form