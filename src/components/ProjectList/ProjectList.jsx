import styled from './ProjectList.module.scss'
import { useState } from 'react'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import PropTypes from 'prop-types'

import RoundedButton from '../RoundedButton/RoundedButton'
import { AiOutlineSearch } from 'react-icons/ai'

export default function ProjectList({ projectNames }) {
  const [active, setActive] = useState(null)

  function handleCollapse(id) {
    setActive(active === id ? null : id)
  }

  const isActive = (id) => active === id
  const isDone = (percentage) => percentage === 100

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
                  <RoundedButton icon={AiOutlineSearch} />
                  <RoundedButton
                    icon={isActive(project.id) ? BsChevronUp : BsChevronDown}
                    onClick={() => handleCollapse(project.id)}
                  />
                </div>
              </div>
              <ul
                className={isActive(project.id) ? styled.active : styled.hidden}
              >
                {' '}
                {project.tasks.map((task) => (
                  <li key={task.id} className={styled.tasksListItem}>
                    <div className={styled.projectWrapper}>
                      <span
                        className={
                          isDone(task.percentage)
                            ? styled.done
                            : styled.tasksItemPercentage
                        }
                      >
                        {isDone(task.percentage) ? 'ready' : task.percentage}
                        <span
                          className={
                            isDone(task.percentage) ? styled.hidden : null
                          }
                        >
                          %
                        </span>
                      </span>
                      <p
                        className={
                          isDone(task.percentage)
                            ? styled.taskDone
                            : styled.taskName
                        }
                      >
                        {task.name}
                      </p>
                    </div>
                    <div className={styled.projectInfoWrapper}>
                      <p className={styled.taskDate}>{task.date}</p>
                      <RoundedButton icon={AiOutlineSearch} />
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
