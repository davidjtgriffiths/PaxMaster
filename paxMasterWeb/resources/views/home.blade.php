@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in! Admin is at http://localhost:8000/admin if using the Laravel development server.') }}


                    {!! Form::open(['action' => ['MessageController@update', $message->id], 'method' => 'POST']) !!}
                      {{ csrf_field() }}
                      <div class="form-row">
                        <input type="hidden" name="id" class="form-control" value="{{ $message->id }}"/></input>
                        <label for="vertexName">Message</label>
                        <input name="title" type="string" value="{{ $message->title }}" class="form-control" id="title" required /></input>
                        {!! Form::hidden('_method', 'PUT') !!}
                      </div>
                      <input type="submit" value="Update Message" />
                    {!! Form::close() !!}
                  </div>
            </div>
        </div>
    </div>
</div>
@endsection
