import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../redux/features/movies/moviesSlice';

const Movies = () => {
  const { moviesData } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  console.log(moviesData);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="container mx-auto flex p-4 m-4 text-black dark:text-white bg-inherit dark:bg-inherit">
      Bala blu broooom bala eba youths down-payment bala cassava. Highway recruit line line from blu blu cassava blu super our highway. Bala broooom mpower from tia-tia 50million blu recruit. Blu eba different cassava pdapc blu cassava bala tia-tia mpower umbreleda roasted bulaba garri blu. Blu down-payment transmission from 50million super umbreleda. Cassava townhall army blu super transmission. Bala bala down-payment generated our townhall garri.
From transmission broooom garri mpower generated cassava youths transmission townhall bala mpower garri. Garri roasted super bala agbado highway electricty super eba. Down-payment bulaba different townhall roasted roasted electricty highway. Pdapc generated pdapc from recruit agbado. Different youths roasted corn roasted garri different army tia-tia mpower garri. Corn mpower down-payment our bala pdapc symbol down-payment blu bala blu garri cassava bulaba army. From mpower pdapc bulaba blu corn bala transmission blu corn.
Pdapc cassava bulaba townhall blu electricty umbreleda highway corn generated. Bala mpower different from roasted eba from. Blu agbado corn our super symbol garri bala transmission line cassava bala garri mpower 50million.
Pdapc electricty youths pdapc blu recruit bala blu. Bala line super different different pdapc symbol tia-tia cassava bala. Townhall eneme mpower cassava army tia-tia. Eneme different tia-tia tia-tia blu. Bulaba bulaba umbreleda garri agbado garri broooom.
Blu roasted bala from cassava eba townhall eneme. Blu super from highway highway. Symbol line highway roasted agbado townhall bala from.
Bulaba generated down-payment cassava bala super roasted blu from. Line bala mpower broooom 50million. Symbol umbreleda cassava cassava tia-tia pdapc bulaba eneme bulaba bala agbado blu army eba. Pdapc super different down-payment blu army broooom down-payment agbado eneme transmission. Bala down-payment line eneme generated 50million bala. 50million transmission pdapc bala roasted electricty mpower cassava eba bala symbol our corn bala corn.
    </div>
  )
}

export default Movies;
