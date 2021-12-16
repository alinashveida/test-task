import styled from './ProjectList.module.scss'
import { useState } from 'react'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import PropTypes from 'prop-types'

export default function ProjectList({ projectNames }) {
  const [active, setActive] = useState({})

  function handleCollapse(id) {
    setActive({
      ...active,
      [id]: !active[id],
    })
  }

  const projectNamesLength = projectNames.length

  return (
    <ul>
      {!projectNamesLength ? (
        <div className={styled.messageNotFound}>Project not found</div>
      ) : (
        <>
          {projectNames.map((project) => (
            <li key={project.id}>
              <div className={styled.listItem}>
                <div className={styled.projectWrapper}>
                  <span className={styled.itemPercentage}>
                    {project.percentage}
                    <span>%</span>
                  </span>{' '}
                  <p className={styled.projectName}>{project.name}</p>
                </div>
                <div className={styled.projectInfoWrapper}>
                  <span className={styled.projectInfo}>
                    {project.description}
                  </span>
                  <ButtonSearch />
                  <button
                    className={styled.buttonInfo}
                    id={project.id}
                    onClick={() => handleCollapse(project.id)}
                  >
                    {active[project.id] ? (
                      <BsChevronUp id={project.id} />
                    ) : (
                      <BsChevronDown id={project.id} />
                    )}
                  </button>
                </div>
              </div>
              <ul
                className={active[project.id] ? styled.active : styled.hidden}
              >
                {' '}
                {project.tasks.map((task) => (
                  <li key={task.id} className={styled.tasksListItem}>
                    <div className={styled.projectWrapper}>
                      <span
                        className={
                          task.percentage === 100
                            ? styled.done
                            : styled.tasksItemPercentage
                        }
                      >
                        {task.percentage === 100 ? 'READY' : task.percentage}
                        <span
                          className={
                            task.percentage === 100 ? styled.hidden : null
                          }
                        >
                          %
                        </span>
                      </span>
                      <p
                        className={
                          task.percentage === 100
                            ? styled.taskDone
                            : styled.taskName
                        }
                      >
                        {task.name}
                      </p>
                    </div>
                    <div className={styled.projectInfoWrapper}>
                      <p className={styled.taskDate}>{task.date}</p>
                      <ButtonSearch />
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}{' '}
        </>
      )}
    </ul>
  )
}

ProjectList.propTypes = {
  projectNames: PropTypes.array,
}
