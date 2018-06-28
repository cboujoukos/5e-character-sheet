import React from 'react';
import $ from 'jquery';

const CheckboxesList = ({list, listName}) => {

  const renderList = list.map((item, i) => {
    if (i%2 !== 0) {
      return <span  key={i}><input className={listName} type="checkbox" name={list} value={item.name || item} id={item.name || item} /> <label htmlFor={item.name || item} >{item.name || item}</label><br /></span>
    } else {
      return <span  key={i}><input className={listName} type="checkbox" value={item.name || item} id={item.name || item} /> <label htmlFor={item.name || item} >{item.name || item}</label></span>
    }
  }
)

$(`input.${listName}[type=checkbox]`).on('change', function (e) {
    if ($(`input.${listName}[type=checkbox]:checked`).length > 2) {
        $(this).prop('checked', false);
        // debugger
        // if ($(`input.${listName}[type=checkbox]`).checked !== true) {
        //   $(`.input.${listName}[type=checkbox]`).prop('disabled', true)
        // }
        // $(`input.${listName}[type=checkbox]`).prop('disabled', true)
        alert("allowed only 2");
      }
    }
  )

  return (
    <div>
      {renderList}
    </div>
  )
}

export default CheckboxesList
