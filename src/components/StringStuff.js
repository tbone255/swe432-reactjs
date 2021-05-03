import React, { useState, useCallback, useEffect, useRef } from "react";
import Typography from '@material-ui/core/Typography';
import { css } from '@emotion/react';


function StringStuff(props) {
  const [stringList, setStringList] = useState([]);
  const [result, setResult] = useState("");
  const [selected, setSelected] = useState(0);

	function addRow() {
		var old = [...stringList]
		old.push("");
		setStringList(old);
	}

	function editRow(event, i) {
		var old = [...stringList]
		old[i] = event.target.value;
		setStringList(old);
	}

	function delRow(i) {
		var old = [...stringList]
		old.splice(i, 1);
		setStringList(old);
	}

	function delAll() {
		setStringList([]);
	}

	function onChangeOption(event) {
		setSelected(event.target.value);
	}

	function process() {
		console.log(selected);
		if (selected == 1) {
			setResult(stringList[Math.floor(Math.random()*stringList.length)]);
		}
	  //else if (selected == 2) {
			
		//}
	}


  return (
    <div>
			<center>
				<h2>Create a List of Strings</h2>
				<p>Enter a list of strings in the table below. Click the "+" key to add a row, and click the "x" key to delete a row </p>
					<table>
						<thead>
					  <tr>
						<th>String</th>
						<th><input type="button" value=" + " onClick={addRow}/></th>
						</tr>
						</thead>
						<tbody>
						{stringList.map((string, index) => (
							<tr>
								<td><input type="text" value={stringList[index]} onChange={(e) => editRow(e, index)}/></td>
								<td><input type="button" value=" x " onClick={() => delRow(index)}/></td>
							</tr>
							
						))}
						</tbody>
						</table>
						<br/>
					  <input type="button" value="Clear Strings" onClick={delAll}/>
						
						<h3>Please select an option</h3>
						<p><b>Return a string:</b></p>
						<label>
							<input type="radio"
								name="random"
								value={1}
								checked={selected == 1}
								onChange={onChangeOption}
							/>
							Random
						</label>
						<label>
							<input type="radio"
								name="replacement"
								value={2}
								checked={selected == 2}
								onChange={onChangeOption}
							/>
							With replacement
						</label>
						<label>
							<input type="radio"
								name="replacement"
								value={3}
								checked={selected == 3}
								onChange={onChangeOption}
							/>
							Without replacement
						</label>
						<p><b>Sort the list:</b></p>
						<label>
							<input type="radio"
								name="sort"
								value={4}
								checked={selected == 4}
								onChange={onChangeOption}
							/>
							Sort
						</label>
						<label>
							<input type="radio"
								name="sort"
								value={5}
								checked={selected == 5}
								onChange={onChangeOption}
							/>
							Reverse
						</label>
						<br/>
						<label>
							<input type="radio"
								name="nodupes"
								value={6}
								checked={selected == 6}
								onChange={onChangeOption}
							/>
							No duplicates	(When sorting)
						</label>
						<br/>
						<br/>
						<button name="Submit" onClick={process}>Submit Strings</button>
						<p><b>Result:</b><br/></p>
						<Typography variant="h3" component="div">{result}</Typography>

					<br/>
				</center>
    </div>
  );
}

export default StringStuff;
