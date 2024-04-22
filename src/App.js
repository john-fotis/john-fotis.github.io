import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Hobbies from './components/Hobbies';

function App () {
	return (
		<div className="App">
			<div className='container'>
				<div className='left-side'>
					<PersonalInfo />
					<Skills />
				</div>
				<div className='right-side'>
					<Experience />
					<Education />
					<Projects />
					<Interests />
					<Hobbies />
				</div>
			</div>
		</div>
	);
}

export default App;