import { useState, useEffect } from 'react';
import axios from 'axios';


function useAxiosFetch(data_url)
{
    const [data, set_data] = useState([]);
    const [fetch_error, set_fetch_error] = useState(null);
    const [is_loading, set_is_loading] = useState(false);

    useEffect(() => {
        let is_mounted = true;
        const source = axios.CancelToken.source();

        async function fetch_data(url)
        {
            set_is_loading(true);
            try
            {
                const response = await axios.get(url, {cancelToken: source.token});
                if (is_mounted)
                    {
                    set_data(response.data);
                    set_fetch_error(null);
                    }
            }
            catch (error)
            {
                if (is_mounted)
                    {
                    set_fetch_error(error.message);
                    set_data([]);
                    }
            }
            finally
            {
                is_mounted && set_is_loading(false);
            }
        }

        fetch_data(data_url);

        function clean_up()
        {
            is_mounted = false;
            source.cancel();
        }

        return clean_up;

    }, [data_url]);

    return { data, fetch_error, is_loading };
}

export default useAxiosFetch;