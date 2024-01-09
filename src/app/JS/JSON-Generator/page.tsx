'use client'
import { useState } from 'react'
import styles from './page.module.scss'

const typesSelect = ['string','number','object', 'array', 'boolean', 'null',]

type FieldsProps = {
  name: string,
  type: 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null',
  value: any, 
}

export default function JSONGeneratorPage() {
  const [fields, setFields] = useState<FieldsProps[]>([])
  const [completeJson, setCompleteJson] = useState([])


  function addField() {
    const json = generateRandomJson([
      { field: 'name', type: 'string' },
      { field: 'age', type: 'number' },
      { field: 'isActive', type: 'boolean' },
    ])

    setCompleteJson(json)
  }

  type FieldDescriptor = {
    field: string;
    type: 'string' | 'number' | 'boolean' | 'null';
  };
  
  function generateRandomValue(type: string): any {
    switch (type) {
      case 'string':
        return Math.random().toString(36).substring(2, 10);
      case 'number':
        return Math.floor(Math.random() * 100);
      case 'boolean':
        return Math.random() < 0.5;
      case 'null':
        return null;
      default:
        return null;
    }
  }
  
  function generateRandomJson(fields: FieldDescriptor[]): any {
    const result: any = {};
    fields.forEach(field => {
      result[field.field] = generateRandomValue(field.type);
    });
    return result;
  }

  return (
    <>
      <section className={styles.Content}>
        <h1>Simple JSON Generator</h1>
        <form>
          <label htmlFor="fields">Fields: </label>
          <button onClick={(e) => {
            e.preventDefault()
            addField()
          }}>Add</button>

          {fields.map((item, index) => (
            <fieldset>
              <input placeholder='key' type="text" />
              <select name="" id="">
                {typesSelect.map((type) => (
                  <option value={type} key={type}>{type}</option>
                ))}
              </select>
              <input placeholder='value' type="text" />
            </fieldset>
          ))}
        </form>
      </section>
      <textarea value={JSON.stringify(completeJson)} className={styles.TextArea} />
    </>
  )
}