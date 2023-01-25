import { SearchBarContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const SearchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof SearchFormSchema>;

interface SearchInputProps {
    getPosts: (query?: string) => Promise<void>;
}

export function SearchBar( {getPosts}: SearchInputProps ) {

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(SearchFormSchema)
    })

    async function handleSearchPosts( data : SearchFormInput) {
        await getPosts(data.query);
    }



    return(
        <SearchBarContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <input type="text"  placeholder="Buscar conteúdo" {...register("query")}/>
            
        </SearchBarContainer>

    )
}