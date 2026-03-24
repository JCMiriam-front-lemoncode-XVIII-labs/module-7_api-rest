import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    const loadCharacter = async () => {
      if (id) {
        const apiCharacter = await api.getCharacter(id);
        setCharacter(mapCharacterFromApiToVm(apiCharacter));
      }
    };

    loadCharacter();
  }, [id]);

  const handleSave = async (characterVm: Character) => {
    const success = await api.saveCharacter(characterVm.id, {
      bestSentence: characterVm.bestSentence,
    });

    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};