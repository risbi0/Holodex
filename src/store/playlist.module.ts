/* eslint-disable no-shadow */
import { Playlist } from "@/utils/types";

const initialState = {
    active: {
        id: undefined,
        name: "Unnamed Playlist",
        videos: [],
    },
    isSaved: false,
};

export const state = { ...initialState };

const mutations = {
    saved(state) {
        // after you save the playlist
        state.isSaved = true;
    },
    modified(state) {
        // after each modification of the playlist.
        state.isSaved = false;
    },
    reorder(state, oldIndex: number, newIndex: number) {},
    removeVideoByIndex(state, index: number) {},
    removeVideoByID(state, videoId: string) {},
    /**
     * resets the playlist to a clean slate.
     */
    resetPlaylist(state) {},
};

const actions = {
    saveActivePlaylist({ state, commit }) {
        // save the playlist
        // remember the ID returned by the server inside active.id
        // optionally: refetch via ID just to make sure.
    },
    setActivePlaylistByID({ state, commit }, playlistId: number) {},
    setActivePlaylist({ state, commit }, playlist: Playlist) {},
    deleteActivePlaylist({ state, rootState, commit }) {
        // can only be done if the active playlist has an ID
        // if not, just clear the current playlist.
    },
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations,
};
