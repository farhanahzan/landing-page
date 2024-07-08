import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { changeTheme } from './utils/helper';

import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from '@hello-pangea/dnd';
import { initialLandingPage, jsonData } from './utils/sample';
import EditPopup from './components/popup';
import useGlobalStore from './stores/useGlebalStore';

function App() {
  const setHeroData = useGlobalStore((store) => store.setHeroFormData);
  const setAboutData = useGlobalStore((store) => store.setAboutFormData);
  const heroData = useGlobalStore((store) => store.heroFormData);
  const aboutData = useGlobalStore((store) => store.aboutFormData);
  const [landingPage, setLandingPage] = useState(initialLandingPage);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const updatedSections = [...landingPage];
    const [movedSection] = updatedSections.splice(result.source.index, 1);
    updatedSections.splice(result.destination.index, 0, movedSection);

    setLandingPage(updatedSections);
  };
  const [openPopup, setOpenPopup] = useState(false);
  const [editForm, setEditForm] = useState<React.ReactNode>(null);
  const handlePopup = (form: ReactNode) => {
    setOpenPopup(true);
    setEditForm(form);
  };
  useEffect(() => {
    if (jsonData) {
      const hero = jsonData.hero;
      const about = jsonData.about;

      // console.log('Setting Hero Data:', hero);
      setHeroData(hero);

      // console.log('Setting About Data:', about);
      setAboutData(about);
    }
  }, [setHeroData, setAboutData]);
  console.log(landingPage);
  // useEffect(() => {
  //   console.log('Updated Hero Data:', heroData);
  //   console.log('Updated About Data:', aboutData);
  // }, [heroData, aboutData]);

  return (
    <>
      <div className="bg-secondary">
        <button
          className="py-2 px-8 bg-buttonsone text-typography m-2 "
          onClick={() => changeTheme('')}
        >
          Default
        </button>
        <button
          className="py-2 px-8 bg-buttonsone text-typography m-2 "
          onClick={() => changeTheme('professional-theme-purple')}
        >
          professional
        </button>
        <button
          className="py-2 px-8 bg-buttonsone text-typography m-2"
          onClick={() => changeTheme('personal-theme-purple')}
        >
          personal
        </button>
      </div>
      <div className="flex flex-col relative">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex">
            <aside className="w-56 p-4 bg-gray-200">
              <h2 className="text-lg font-bold mb-4">Sidebar</h2>
              <Droppable droppableId="sections">
                {(provided) => (
                  <ul ref={provided.innerRef} {...provided.droppableProps}>
                    {landingPage.map((section, index) => (
                      <Draggable
                        key={section.id}
                        draggableId={section.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-2 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer flex justify-between items-center"
                          >
                            {section.title}
                            <button onClick={() => handlePopup(section.form)}>
                              Edit
                            </button>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </aside>
            <main className="w-full p-4">
              {landingPage.map((section) => (
                <Fragment key={section.id}>{section.component}</Fragment>
              ))}
            </main>
          </div>
        </DragDropContext>
        {openPopup ? (
          <div className="fixed top-0 left-0 z-40 bg-black/15 flex items-center justify-center h-screen w-full">
            <EditPopup setOpenPopup={setOpenPopup} editForm={editForm} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
