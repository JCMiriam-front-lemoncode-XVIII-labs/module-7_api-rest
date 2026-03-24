import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: String(character.id),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin?.name ?? '',
  location: character.location?.name ?? '',
  image: character.image,
  bestSentence: character.bestSentence ?? '',
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    id: Number(character.id),
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: {
      name: character.origin,
      url: '',
    },
    location: {
      name: character.location,
      url: '',
    },
    image: character.image,
    episode: [],
    url: '',
    created: '',
    bestSentence: character.bestSentence,
  } as apiModel.Character);